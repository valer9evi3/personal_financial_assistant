import HomePage from '@/app/page';
import { Providers } from '@/app/providers';

export default function Home() {
  return (
    <Providers>
      <HomePage />
    </Providers>
  );
}
