import { useRouter } from "next/router";

function events() {
  const router = useRouter();
  const id = router.asPath;
  console.log(router)
  
  return (
    <div>
      <h2>Id of events {id}</h2>
    </div>
  );
}

export default events;
