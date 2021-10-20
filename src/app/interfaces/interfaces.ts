
export interface Usuario {
    celular?:      string;
    nombre?:       string;
    apellido?:     string;
    rol?:          string;
    ciudad?:       string;
    departamento?: string;
    usuarioID?:    string;
}

export interface RespUsuario {
    ok:      boolean;
    usuario: Usuario;
}

export interface RespLoginUsuario {
    ok:             boolean;
    msg:            string
    usuario:        Usuario;
    token:          string;
    createdAt:      Date;
    updatedAt:      Date;
}

export interface RespuestaRoles {
    total: number;
    Roles: Role[];
}

export interface Role {
    descripcion: string;
    createdAt:   Date;
    updatedAt:   Date;
    rolID:       string;
}

export interface RespuestaDepartamento {
    total:        number;
    Departamento: Departamento[];
    Ciudad?: Ciudad[];
}


export interface Departamento {
    descripcion:    string;
    createdAt:      Date;
    updatedAt:      Date;
    departamentoID: string;
}


export interface Ciudad {
    descripcion:  string;
    departamento: Departamento;
    ciudadID:     string;
}

// emergencia
export interface RespTipoEmergencia {
    ok:               boolean;
    tipoEmergenciaDB: TipoEmergencia;
}

export interface TipoEmergencia {
    descripcion:      string;
    createdAt:        Date;
    updatedAt:        Date;
    tipoEmergenciaID: string;
}

// nivel

export interface RespNivel {
    ok:    boolean;
    total: number;
    nivel: Nivel;
}

export interface Nivel {
    descripcion: string;
    prioridad:   number;
    nivelID:     string;
}

// 
// export interface Emergencia {
//     relatoria:       string;
//     direccion:       string;
//     longitud?:        string;
//     latitud?:         string;
//     img?:             string;
//     nivel:           string;
//     denunciante:     string;
//     tipo_emergencia: string;
//     emergenciaID:    string;
// }
export interface Emergencia {
    relatoria:       string;
    direccion:       string;
    longitud?:        string;
    latitud?:         string;
    img?:             string;
    nivel:           Nivel;
    denunciante:     Usuario;
    tipo_emergencia: TipoEmergencia;
    emergenciaID:    string;
}

export interface RespEmergencia {
    total:      number;
    Emergencia: Emergencia[];
}

export interface Estados {
    descripcion:   string;
    estadosID:     string;
}

export interface Nivel {
    descripcion: string;
    prioridad:   number;
    nivelID:     string;
}

export interface TipoEmergencia {
    descripcion:      string;
    createdAt:        Date;
    updatedAt:        Date;
    tipoEmergenciaID: string;
}


