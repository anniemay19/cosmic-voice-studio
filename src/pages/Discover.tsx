import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Music } from 'lucide-react';

const Discover = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Discover</h1>
      <div className="mb-8 flex gap-2">
        <Input placeholder="Search for beat packs, sound libraries..." className="bg-black/30 border-purple-500/40" />
        <Button className="bg-purple-600 hover:bg-purple-700"><Search className="mr-2 h-4 w-4" /> Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
            <Card key={i} className="bg-white/10 border-purple-500/30 text-white backdrop-blur-lg hover:bg-white/20 transition-colors">
                <CardHeader>
                    <img src={`https://picsum.photos/seed/${i+10}/400/200`} alt="Beat pack" className="rounded-t-lg"/>
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-lg">Cosmic Beats Vol. {i + 1}</CardTitle>
                    <p className="text-sm text-gray-400">Synthwave, 80s Pop</p>
                    <Button variant="ghost" className="w-full mt-4 justify-start p-0 h-auto text-purple-400 hover:text-purple-300">Match to my voice</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default Discover;