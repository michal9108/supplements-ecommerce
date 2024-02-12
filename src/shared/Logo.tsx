

import BodyBuffLogo from '@/assets/BodyBuffLogo.svg';
import {Link} from 'react-router-dom';

export default function Logo() {
  return (
    <Link
   
    to="/"
    >
    <img src={BodyBuffLogo} className='w-20 h-20'></img>
    </Link>
  )
}
