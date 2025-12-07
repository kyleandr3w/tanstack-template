import { Send } from 'lucide-react';

interface WelcomeScreenProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

export const WelcomeScreen = ({ 
  input, 
  setInput, 
  handleSubmit, 
  isLoading 
}: WelcomeScreenProps) => (
  <div className="flex items-center justify-center flex-1 px-4">
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Title */}
      <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
        <a
          href="https://sonoraxav.com"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          SonoraX AV
        </a>{' '}
        • Design &amp; Support Chat
      </h1>

      {/* Intro text */}
      <p className="w-11/12 max-w-2xl mx-auto mb-4 text-base text-gray-300 md:text-lg">
        Ask questions about pro audio, video, networking, home automation, or security systems.
        I&apos;ll help you plan systems, troubleshoot issues, and understand your options in plain English.
      </p>

      {/* Example bullets */}
      <ul className="w-11/12 max-w-2xl mx-auto mb-6 text-sm text-left text-gray-400 list-disc list-inside md:text-base">
        <li>&quot;What gear do I need for a 12x15 home theater?&quot;</li>
        <li>&quot;How should I wire speakers for distributed audio in 4 zones?&quot;</li>
        <li>&quot;What&apos;s a simple camera setup to cover my front yard and driveway?&quot;</li>
      </ul>

      {/* Input form */}
      <form onSubmit={handleSubmit}>
        <div className="relative max-w-xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder='Example: "Design a 10-seat conference room with AVoIP & ceiling mics" or "Help me plan my home theater speakers."'
            className="w-full py-3 pl-4 pr-12 overflow-hidden text-sm text-white placeholder-gray-400 border rounded-lg resize-none border-orange-500/20 bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent"
            rows={1}
            style={{ minHeight: '88px' }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute p-2 text-orange-500 transition-colors -translate-y-1/2 right-2 top-1/2 hover:text-orange-400 disabled:text-gray-500 focus:outline-none"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  </div>
);
