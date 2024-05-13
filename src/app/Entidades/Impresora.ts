export class Impresora {

    private _serialNumber: number = 0;
    private _marca: string = "";
    private _modelo: string = "";
    private _usuario: string = "";

    public get serialNumber(): number {
        return this._serialNumber;
    }
    public set serialNumber(value: number) {
        this._serialNumber = value;
    }
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }
    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }
    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
    }

    
}
