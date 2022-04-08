export default function UserDetails({ user }) {
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1> {user.name}</h1>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/users/${context.params.id}`);
  const data = await res.json();

  return {
    props: { user: data },
  };
};
