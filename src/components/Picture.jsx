export default function Picture({ info }) {
  return (
    <picture className="w-[85%] self-end h-full absolute top-0 right-0 max-[600px]:w-full max-[600px]:h-[210px] max-[600px]:m-auto max-[600px]:relative max-[600px]:z-10 max-[600px]:mt-14">
      <source media="(max-width: 600px)" srcSet={info?.imageSmall} />
      <source media="(min-width: 601px)" srcSet={info?.imageBg} />
      <img
        className="object-cover w-full h-full max-[600px]:z-10"
        fetchpriority="hight"
        src="true"
        alt={info?.title}
        arial-hidden="true"
      />
    </picture>
  );
}
