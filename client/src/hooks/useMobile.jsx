import { useEffect, useState } from "react";

const useMobile = () => {
    const [mobile, setMobile] = useState(window.innerWidth < 475);

    useEffect(() => {
      const handleResize = () => {
        setMobile(window.innerWidth < 475);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return mobile;
}
export default useMobile