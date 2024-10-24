import { Implimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Implimivel, Comparavel<T> {

}