import './search.css';
import { FaSistrix, FaMicrophone } from 'react-icons/fa';

const Search = () => (
  <div className="box">
    <input type="text" name="" />
    <FaMicrophone
      className="voice-icon"
      style={{ color: '#35969C', fontSize: '25px', marginRight: '10px' }}
    />
    <img
      alt="any"
      id="sbi_b"
      className=" rms_img"
      role="none"
      width="24"
      height="24"
      src="https://r.bing.com/rp/XvRHqJwJt19aXQca73hQTfvNMxk.svg"
      data-bm="2"
    />

    <FaSistrix
      className="search-icon"
      style={{ color: '#076D74', fontSize: '25px', marginLeft: '10px' }}
    />
  </div>
);

export default Search;
