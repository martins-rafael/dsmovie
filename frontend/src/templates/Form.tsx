/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import FormCard from "components/FormCard";

const FormTemplate = () => {
  const router = useRouter();
  const { movieId } = router.query;  

  return (
    <FormCard movieId={`${movieId}`} />
  );
}

export default FormTemplate;
