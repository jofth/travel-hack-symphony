
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Node {
  id: string;
  label: string;
  icon?: string;
  color?: string;
  position: { x: number; y: number };
}

interface Connection {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
  color?: string;
  thickness?: number;
}

interface AnimatedDiagramProps {
  nodes: Node[];
  connections: Connection[];
  className?: string;
}

const AnimatedDiagram: React.FC<AnimatedDiagramProps> = ({ 
  nodes, 
  connections,
  className 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [displayConnections, setDisplayConnections] = useState<Connection[]>([]);
  const [visibleNodes, setVisibleNodes] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isVisible, setIsVisible] = useState(false);

  // Handle responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const parent = svgRef.current.parentElement;
        if (parent) {
          setDimensions({
            width: parent.clientWidth,
            height: parent.clientHeight
          });
        }
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  // Animate in nodes and connections
  useEffect(() => {
    if (!isVisible) return;

    // Reveal nodes one by one
    const nodeIds = nodes.map(node => node.id);
    const nodeTimer = setInterval(() => {
      setVisibleNodes(prev => {
        if (prev.length === nodeIds.length) {
          clearInterval(nodeTimer);
          return prev;
        }
        return [...prev, nodeIds[prev.length]];
      });
    }, 300);

    // Start animating connections after nodes appear
    setTimeout(() => {
      const connectionTimer = setInterval(() => {
        setDisplayConnections(prev => {
          if (prev.length === connections.length) {
            clearInterval(connectionTimer);
            return prev;
          }
          return [...prev, connections[prev.length]];
        });
      }, 500);
    }, nodes.length * 300);

    return () => {
      clearInterval(nodeTimer);
    };
  }, [isVisible, nodes, connections]);

  // Find node by id helper
  const getNodeById = (id: string) => nodes.find(node => node.id === id);

  return (
    <div className={cn("w-full h-full min-h-[400px]", className)}>
      <svg 
        ref={svgRef}
        width={dimensions.width} 
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-full"
      >
        {/* Draw connections */}
        {displayConnections.map((conn, idx) => {
          const fromNode = getNodeById(conn.from);
          const toNode = getNodeById(conn.to);
          
          if (!fromNode || !toNode) return null;
          
          // Calculate line coordinates
          const x1 = fromNode.position.x * dimensions.width;
          const y1 = fromNode.position.y * dimensions.height;
          const x2 = toNode.position.x * dimensions.width;
          const y2 = toNode.position.y * dimensions.height;
          
          // Calculate control points for curved lines
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          const curveFactor = 0.2;
          const dx = x2 - x1;
          const dy = y2 - y1;
          const controlX = midX - dy * curveFactor;
          const controlY = midY + dx * curveFactor;
          
          return (
            <g key={`conn-${idx}`} className="stagger-item">
              <path
                d={`M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`}
                fill="none"
                stroke={conn.color || "#6366F1"}
                strokeWidth={conn.thickness || 2}
                strokeDasharray={conn.animated ? "5,5" : "none"}
                className={conn.animated ? "animate-dash" : ""}
              />
              
              {conn.label && (
                <text
                  x={midX}
                  y={midY - 5}
                  textAnchor="middle"
                  className="text-xs fill-gray-600 font-medium"
                >
                  {conn.label}
                </text>
              )}
              
              {/* Arrow at the end of the line */}
              <marker
                id={`arrowhead-${idx}`}
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill={conn.color || "#6366F1"}
                />
              </marker>
            </g>
          );
        })}
        
        {/* Draw nodes */}
        {nodes.map((node) => {
          if (!visibleNodes.includes(node.id)) return null;
          
          const x = node.position.x * dimensions.width;
          const y = node.position.y * dimensions.height;
          
          return (
            <g 
              key={node.id} 
              transform={`translate(${x}, ${y})`}
              className="animate-scale-in"
            >
              <circle
                r="30"
                fill={node.color || "#ffffff"}
                stroke="#e2e8f0"
                strokeWidth="2"
                className="filter drop-shadow-sm"
              />
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-medium fill-gray-800"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default AnimatedDiagram;
