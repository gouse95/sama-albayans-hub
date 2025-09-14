import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn } from 'lucide-react';

// Import work images
import airConditioningImg from '@/assets/SAMA ALBAYAN WORKS/Airconditioning Installation & Maintenance works.jpg';
import parkingDoorsImg from '@/assets/SAMA ALBAYAN WORKS/Automatic Parking Doors Works.jpg';
import falseCeilingImg from '@/assets/SAMA ALBAYAN WORKS/False Ceiling & Gypsum Works.jpg';
import paintingImg from '@/assets/SAMA ALBAYAN WORKS/Painting Works.jpg';
import plumbingImg from '@/assets/SAMA ALBAYAN WORKS/Plumbing and Sanitory Fitting Works.jpg';
import tabbokImg from '@/assets/SAMA ALBAYAN WORKS/Tabbok , Plaster works.jpg';
import tileFixingImg from '@/assets/SAMA ALBAYAN WORKS/Tile fixing & Interlock Works.jpg';
import carpentryImg from '@/assets/SAMA ALBAYAN WORKS/Wood and Carpentary Work.jpg';

interface WorkImage {
  id: string;
  src: string;
  titleKey: string;
  category: string;
}

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<WorkImage | null>(null);

  const workImages: WorkImage[] = [
    {
      id: 'ac',
      src: airConditioningImg,
      titleKey: 'gallery.ac.title',
      category: 'AC & HVAC'
    },
    {
      id: 'parking',
      src: parkingDoorsImg,
      titleKey: 'gallery.parking.title',
      category: 'Doors & Access'
    },
    {
      id: 'ceiling',
      src: falseCeilingImg,
      titleKey: 'gallery.ceiling.title',
      category: 'Ceiling & Gypsum'
    },
    {
      id: 'painting',
      src: paintingImg,
      titleKey: 'gallery.painting.title',
      category: 'Painting'
    },
    {
      id: 'plumbing',
      src: plumbingImg,
      titleKey: 'gallery.plumbing.title',
      category: 'Plumbing'
    },
    {
      id: 'masonry',
      src: tabbokImg,
      titleKey: 'gallery.masonry.title',
      category: 'Masonry'
    },
    {
      id: 'tiling',
      src: tileFixingImg,
      titleKey: 'gallery.tiling.title',
      category: 'Tiling'
    },
    {
      id: 'carpentry',
      src: carpentryImg,
      titleKey: 'gallery.carpentry.title',
      category: 'Carpentry'
    }
  ];

  const openModal = (image: WorkImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={t(image.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {t(image.titleKey)}
                  </h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={t(selectedImage.titleKey)}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {t(selectedImage.titleKey)}
                  </h3>
                  <p className="text-secondary/70 text-lg">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
