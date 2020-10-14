import React from "react";
import { Link } from "gatsby";

const LanguageSelector = () => {
  const patchcurrent = window.location.pathname ;
  if (patchcurrent.indexOf("/en/") !== -1) {
    return (
      <div>
        <Link  to={`${ patchcurrent }`}>
          English
        </Link>
        <Link  to={patchcurrent.replace("/en/", "/")}>
          Russian
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link  to={`/en${ patchcurrent }`}>
          English
        </Link>
        <Link  to={patchcurrent.replace("/en/", "/")}>
          Russian
        </Link>
      </div>	
    )
  }
}
export { LanguageSelector }