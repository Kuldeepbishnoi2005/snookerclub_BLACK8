import { Image as ImageIcon } from 'lucide-react';

function Gallery() {
  const placeholderImages = [
    {
      id: 1,
      title: 'Premium Table 1',
      description: 'Professional grade snooker table'
    },
    {
      id: 2,
      title: 'Premium Table 2',
      description: 'Maintained to highest standards'
    },
    {
      id: 3,
      title: 'Club Interior',
      description: 'Modern and comfortable ambiance'
    },
    {
      id: 4,
      title: 'Playing Area',
      description: 'Spacious and well-lit environment'
    },
    {
      id: 5,
      title: 'Equipment',
      description: 'High-quality cues and accessories'
    },
    {
      id: 6,
      title: 'Lounge Area',
      description: 'Relax between games'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Club <span className="text-emerald-400">Gallery</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Take a look at our premium facilities and atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((item) => (
            <div
              key={item.id}
              className="group relative bg-neutral-800/50 border border-neutral-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-neutral-600 mx-auto mb-3 group-hover:text-emerald-500 transition-colors" />
                  <p className="text-neutral-500 text-sm">Photo Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <ImageIcon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Add Your Photos</h3>
          <p className="text-neutral-400 mb-6">
            Upload actual photos of your club to showcase the facilities and atmosphere
          </p>
          <p className="text-neutral-500 text-sm">
            Replace these placeholders with real images to enhance your website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
