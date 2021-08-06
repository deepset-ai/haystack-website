import { GetServerSideProps } from "next";

// export const getsServerSideProps: GetServerSideProps = async () => {
//   return {
//     redirect: {
//       destination: "/overview/get-started",
//       permanent: true,
//     },
//   };
// };

export default function Index() {
  return <div className="xl:max-w-8xl mx-auto" />;
}
