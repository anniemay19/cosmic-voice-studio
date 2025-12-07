import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Mic, Music } from 'lucide-react';

const Karaoke = () => {
  const [mode, setMode] = useState('karaoke'); // 'karaoke' or 'acapella'
  const [reverb, setReverb] = useState([50]);
  const [doubling, setDoubling] = useState([30]);

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Karaoke & Sing-Along</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="bg-white/10 border-purple-500/30 text-white backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Sing Your Heart Out</span>
                <div className="flex items-center gap-2 p-1 rounded-lg bg-black/20">
                  <Button size="sm" variant={mode === 'karaoke' ? 'default' : 'ghost'} onClick={() => setMode('karaoke')} className={`rounded-md ${mode === 'karaoke' ? 'bg-purple-600' : ''}`}> <Music className="mr-2 h-4 w-4" /> Karaoke</Button>
                  <Button size="sm" variant={mode === 'acapella' ? 'default' : 'ghost'} onClick={() => setMode('acapella')} className={`rounded-md ${mode === 'acapella' ? 'bg-purple-600' : ''}`}> <Mic className="mr-2 h-4 w-4" /> Acapella</Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-black/30 h-80 rounded-lg flex items-center justify-center mb-4">
                <p className="text-2xl text-gray-400">Synced lyrics will appear here...</p>
              </div>
              <div className="h-24 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <p className="text-white/80">Waveform Animation</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="bg-white/10 border-purple-500/30 text-white backdrop-blur-lg">
            <CardHeader><CardTitle>Vocal Effects</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="font-semibold">Reverb</label>
                <Slider defaultValue={reverb} onValueChange={setReverb} max={100} step={1} className="mt-2" />
                <p className="text-xs text-right text-gray-400">{reverb[0]}%</p>
              </div>
              <div>
                <label className="font-semibold">Doubling</label>
                <Slider defaultValue={doubling} onValueChange={setDoubling} max={100} step={1} className="mt-2" />
                <p className="text-xs text-right text-gray-400">{doubling[0]}%</p>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Effects</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Karaoke;