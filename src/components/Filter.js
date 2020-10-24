export default class Filter {

    constructor(nombreCompleto, email, telefono, empresa, sector) {
        console.log("Filter constructor called");
        this.nombreCompleto = nombreCompleto;
        this.email = email;
        this.telefono = telefono;
        this.empresa = empresa;
        this.sector = sector;
    }

    static newObject(filter) {
        return new Filter(filter.nombreCompleto, filter.email, filter.telefono, filter.empresa, filter.sector);
    }

    matchesContact(contacto) {
        if (!contacto) return true;

        var matchesNombreCompleto = 
            !this.nombreCompleto || 
            ((contacto.nombre || "").toLowerCase().indexOf(this.nombreCompleto.toLowerCase()) > -1) ||
            ((contacto.apellidos || "").toLowerCase().indexOf(this.nombreCompleto.toLowerCase()) > -1);
        var matchesEmail    = !this.email    || (contacto.email || "").toLowerCase().indexOf(this.email.toLowerCase()) > -1;
        var matchesTelefono = !this.telefono || (contacto.telefono || "").toLowerCase().indexOf(this.telefono.toLowerCase()) > -1;
        var matchesEmpresa  = !this.empresa  || (contacto.empresa || "").toLowerCase().indexOf(this.empresa.toLowerCase()) > -1;
        var matchesSector   = !this.sector   || (contacto.sector || "").toLowerCase().indexOf(this.sector.toLowerCase()) > -1;

        return matchesNombreCompleto && matchesEmail && matchesTelefono && matchesEmpresa && matchesSector;
    }
}