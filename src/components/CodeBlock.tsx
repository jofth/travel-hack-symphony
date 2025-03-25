
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'javascript',
  title,
  className 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for demo purposes
  const highlightedCode = code
    .replace(
      /(".*?")/g, 
      '<span class="text-green-500">$1</span>'
    )
    .replace(
      /(\$\d+|[0-9]+)/g, 
      '<span class="text-amber-500">$1</span>'
    )
    .replace(
      /(function|return|if|else|const|let|var|for|while|new|class|import|export|from)/g,
      '<span class="text-purple-500">$1</span>'
    )
    .replace(
      /(\w+)(?=\()/g, 
      '<span class="text-blue-500">$1</span>'
    )
    .replace(
      /(\/\/.*)$/gm, 
      '<span class="text-gray-500">$1</span>'
    );

  return (
    <div className={cn(
      "rounded-lg overflow-hidden shadow-lg bg-gray-900 font-mono text-sm stagger-item",
      className
    )}>
      {title && (
        <div className="px-4 py-2 bg-gray-800 text-gray-300 flex items-center justify-between">
          <span>{title}</span>
          <button
            onClick={copyToClipboard}
            className="p-1 rounded hover:bg-gray-700 transition-colors"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto text-gray-300">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
