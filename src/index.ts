import { Base } from "./base"
import { Posts } from "./posts";
import { applyMixins } from "./utils";

class Addispay extends Base{}
interface Addispay extends Posts {}

applyMixins(Addispay, [Posts]);
export default Addispay;