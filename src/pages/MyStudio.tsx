import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Folder, Download, Trash2 } from 'lucide-react';

const MyStudio = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">My Studio</h1>
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-white/10 border-purple-500/30 text-white backdrop-blur-lg flex items-center justify-between p-4">
            <div className="flex items-center">
                <Folder className="w-8 h-8 mr-4 text-purple-400"/>
                <div>
                    <h3 className="font-bold text-lg">Project Stardust {i+1}</h3>
                    <p className="text-sm text-gray-400">Last updated: 2 days ago</p>
                </div>
            </div>
            <div className="flex gap-2">
                <Button variant="ghost" size="icon"><Download className="h-5 w-5"/></Button>
                <Button variant="ghost" size="icon"><Trash2 className="h-5 w-5 text-red-500"/></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyStudio;