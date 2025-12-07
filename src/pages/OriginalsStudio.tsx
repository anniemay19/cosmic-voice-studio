import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle, Mic, Wand2, Music, Layers, GitBranch } from 'lucide-react';

const Section = ({ title, icon: Icon, children, description }) => (
  <Card className="bg-white/5 border-purple-500/20 text-white backdrop-blur-md">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Icon className="mr-3 h-6 w-6 text-purple-400" />
        <span>{title}</span>
        {description && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-6 w-6">
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>{description}</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);


const OriginalsStudio = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-2">Originals Studio</h1>
      <p className="text-gray-400 mb-8">Create your next hit with your own voice at the center.</p>
      <div className="space-y-8">
        <Section title="Hum-to-Beat Engine" icon={Mic} description="Record a hum, and we'll generate beat options for you.">
          <div className="flex items-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 flex-shrink-0">Start Recording</Button>
            <div className="w-full h-12 bg-black/30 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Recording will appear here...</p>
            </div>
          </div>
        </Section>

        <Section title="Production Prompt" icon={Wand2} description="Describe the vibe, genre, and instruments you want.">
           <Textarea placeholder='e.g., "A slow, melancholic pop song with piano, strings, and a simple 808 beat"' className="bg-black/30 border-purple-500/40" />
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Section title="Engineering Suite" icon={Layers} description="Fine-tune your vocals to perfection.">
            <div className="space-y-4">
                <div>
                    <label>Pitch Alignment</label>
                    <Slider defaultValue={[80]} className="my-2" />
                </div>
                 <div>
                    <label>Breath Softening</label>
                    <Slider defaultValue={[60]} className="my-2" />
                </div>
            </div>
          </Section>
          <Section title="Version Generator" icon={GitBranch} description="Preview and manage different AI-generated versions of your song.">
             <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg hover:bg-black/50 cursor-pointer">
                    <span>Version 1 (Pop Ballad)</span>
                    <Button size="sm">Preview</Button>
                </div>
                 <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg hover:bg-black/50 cursor-pointer">
                    <span>Version 2 (Acoustic)</span>
                    <Button size="sm">Preview</Button>
                </div>
             </div>
          </Section>
        </div>

      </div>
    </div>
  );
};

export default OriginalsStudio;