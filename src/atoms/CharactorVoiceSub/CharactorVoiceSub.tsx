import React, {  } from "react";

const CharactorVoiceSub: any = ({sub} : any) => {

  const style: React.CSSProperties = {
    position: 'absolute',
    zIndex: '9999',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '1.2rem',
    margin: '1.2rem 2.4rem 1.2rem 2.4rem',
    fontSize: '1.2rem',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '12px',
  };

  return (
    <div style={style}>
      {sub}
    </div>
  );
}

export default CharactorVoiceSub;  
