import clsx from 'clsx';

interface Props {
  image: string;
  size: 'banner' | 'item';
  className?: string;
}

export function Image({ image, size, className }: Props) {
  return (
    <div
      className={clsx(
        ' bg-gray-200  relative',
        size === 'banner' ? 'w-full h-auto pt-[80%]' : 'w-16 h-16 ',
        className
      )}
    >
      {image !== 'None' && (
        <img
          className="absolute top-0 left-0 w-full h-full object-cover "
          src={image}
        />
      )}
    </div>
  );
}
