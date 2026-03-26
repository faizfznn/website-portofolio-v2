import { GoeyToaster as GoeyToasterPrimitive, goeyToast } from "goey-toast"
import "goey-toast/styles.css"

export { goeyToast }

function GoeyToaster(props) {
  return <GoeyToasterPrimitive position="bottom-right" {...props} />;
}

export { GoeyToaster }
