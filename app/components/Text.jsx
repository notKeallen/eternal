

function Text({ texts }) {
    return (
      <div>
        <h2 className="text-white font-semibold">{texts.heading}</h2>
        <p className="my-10px text-sm">{texts.text}</p>
        {texts.hasHeading2 && texts.hasText2 && (
          <div>
            {Array.isArray(texts.hasHeading2) ? (
              texts.hasHeading2.map((heading, idx) => (
                <div key={idx}>
                  <h3 className="mx-[40px] text-white font-semibold">{heading}</h3>
                  {Array.isArray(texts.hasText2) && texts.hasText2[idx] && (
                    <p className="my-10px mx-[40px] text-sm">{texts.hasText2[idx]}</p>
                  )}
                </div>
              ))
            ) : (
              <div>
                <h3 className="m-10px">{texts.hasHeading2}</h3>
                <p>{texts.hasText2}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  
  export default Text;
  