import { trpc } from '../../providers/trpc';

function MePage() {
  const { data: me } = trpc.users.me.useQuery();

  if (!me) {
    return <p>Loading...</p>;
  }

  return <p>{me}</p>;
}

export default MePage;
