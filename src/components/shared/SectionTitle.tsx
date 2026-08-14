type SectionTitleProps = { title: string };
export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="section-title">
      <i />
      {title}
    </h2>
  );
}
