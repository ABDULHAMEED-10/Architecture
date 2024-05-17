import { awardsCardsData } from '../../../../demodata';
import './Awards.css';
import CountUp from 'react-countup';
const FullRing = () => {
  return <div className="awards__fullRing"></div>;
};
const DoubleRing = () => {
  return (
    <div className="awards__DoubleRing-outer d-flex">
      <div className="awards__DoubleRing-inner"></div>
    </div>
  );
};

const Awards = () => {
  <CountUp end={100} duration={5} enableScrollSpy={true} scrollSpyDelay={1000} />;
  return (
    <div className="awards">
      <div className="awards__ring-top">
        <DoubleRing />
      </div>
      <div className="awards__ring-bottom">
        <FullRing />
      </div>
      <div className="awards__cards ">
        {awardsCardsData?.map((item, i) => (
          <div key={i} className="award__card d-flex">
            <span className="award__card-number">
              <CountUp start={item.start} end={item.end} duration={5} enableScrollSpy={true}  />
            </span>
            <span className="award__card-name">{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
