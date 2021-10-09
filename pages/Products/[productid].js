import { useRouter } from 'next/router';
function Pro() {
  const router = useRouter();
  const pid = router.query.productid;
  {
    return <div>pid {pid}</div>;
  }
}
export default Pro;
