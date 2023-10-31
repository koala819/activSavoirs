export function PrismicFormat({ blocRichText }) {
  // console.log("blocRichText", blocRichText);
  return blocRichText.map((blocTxt, id) => {
    if (blocTxt) {
      let text = "";

      if (blocTxt.type === "paragraph") {
        text = blocTxt.text;
      }

      if (blocTxt.type === "list-item") {
        text = blocTxt.text;
        return (
          <ul key={id} className='list-disc pl-8 py-1'>
            <li>{text}</li>
          </ul>
        );
      }

      // return <div key={id}>{text === "" ? <div className='h-4' /> : text}</div>;
      return (
        <div key={id} className='p-4'>
          {text}
        </div>
      );
    } else {
      return null;
    }
  });
}
