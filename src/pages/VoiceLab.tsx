import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical, Zap, Target } from 'lucide-react';

const VoiceLab = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Voice Lab</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white/10 border-purple-500/30 text-white backdrop-blur-lg">
          <CardHeader><CardTitle className="flex items-center"><FlaskConical className="mr-2" />Pitch Detection</CardTitle></CardHeader>
          <CardContent><p>Find your vocal range and pitch accuracy.</p></CardContent>
        </Card>
        <Card className="bg-white/10 border-purple-500/30 text-white backdrop-blur-lg">
          <CardHeader><CardTitle className="flex items-center"><Zap className="mr-2" />Warm-ups & Techniques</CardTitle></CardHeader>
          <CardContent><p>Get personalized exercises to improve your voice.</p></CardContent>
        </Card>
        <Card className="bg-white/10 border-purple-500/30 text-white backdrop-blur-lg">
          <CardHeader><CardTitle className="flex items-center"><Target className="mr-2" />Daily Vocal Health</CardTitle></CardHeader>
          <CardContent><p>Track your vocal health and get insights.</p></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VoiceLab;