import { useParams } from 'react-router';

type PlaceholderProps = {
  title: string;
};

export function Placeholder({ title }: PlaceholderProps) {
  const params = useParams();
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <p className="font-script text-4xl text-brand-pink mb-4">bientôt</p>
      <h1 className="text-3xl md:text-4xl mb-4">{title}</h1>
      <p className="text-brand-soft-ink">
        Cette page sera portée pendant la phase 5/6 du rewrite.
      </p>
      {Object.keys(params).length > 0 && (
        <pre className="mt-6 inline-block rounded-lg bg-white/80 px-4 py-2 text-xs text-brand-mute">
          {JSON.stringify(params, null, 2)}
        </pre>
      )}
    </section>
  );
}
