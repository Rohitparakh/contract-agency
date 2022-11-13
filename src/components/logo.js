/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* <Image src={image} alt="startup landing logo" /> */}
      <p style={{textTransform:"uppercase", fontSize:"20px" ,fontWeight:900, letterSpacing:'5px',color:'#aaf'}}>Rohcodes</p>
    </Link>
  );
}
