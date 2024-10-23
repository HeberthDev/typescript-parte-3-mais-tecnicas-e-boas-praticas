/* 
    Antes a "util" era dessa maneira, mas por dar mais flexibilidade pra quem a chamar, foi colocada como interface onde as classes podem implementar várias outras classes podem não podem ter heranças múltiplas (extender de várias classes);
    
    export abstract class Implimivel {
        public abstract paraTexto(): string
    } 
*/
export interface Implimivel {
    paraTexto(): string;
}