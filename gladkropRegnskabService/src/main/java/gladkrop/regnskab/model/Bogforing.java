package gladkrop.regnskab.model;

import gladkrop.regnskab.persistence.LocalDateTimePersistenceConverter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * Created by HansFischer on 05-01-2015.
 */

@NamedQueries({
        @NamedQuery(name = "Bogforing.findAllFromDate", query = "SELECT b FROM Bogforing b WHERE b.dato >= :dato"),
        @NamedQuery(name = "Bogforing.findAllKontoFromDate", query = "SELECT b from Bogforing b WHERE b.dato >= :dato AND b.konto.kontonr = :kontonr")
})

@Entity
@Table(name = "BOGFORING")
public class Bogforing {

    /* @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     @Column(name = "ID", unique = true, nullable = false )
     */
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "BOGFORING_ID", columnDefinition = "CHAR(40)")
    private UUID bogforing_id;

    @Convert(converter = LocalDateTimePersistenceConverter.class)
    @Column(name = "BOGFORING_DATO", nullable = false)
    private LocalDateTime dato;

    @ManyToOne()
    @JoinColumn(name = "KONTO_ID", referencedColumnName = "KONTO_ID", nullable = false)
    private Konto konto;

    @Column(name = "BOGFORING_TEKST")
    private String tekst;

    @Column(name = "BOGFORING_FIRMA")
    private String firma;

    @Column(name = "BOGFORING_KONTAKTPERSON")
    private String kontaktperson;

    @Column(name = "BOGFORING_BELOB")
    private double belob;

    private Bogforing(BogforingBuilder bogforingBuilder) {
        this.dato = bogforingBuilder.dato;
        this.konto = bogforingBuilder.konto;
        this.tekst = bogforingBuilder.beskrivelse;
        this.firma = bogforingBuilder.firma;
        this.kontaktperson = bogforingBuilder.kontaktperson;
        this.belob = bogforingBuilder.belob;
    }

    public Bogforing() {
    }

    public UUID getBogforing_id() {
        return bogforing_id;
    }

    public void setBogforing_id(UUID bogforing_id) {
        this.bogforing_id = bogforing_id;
    }

    public LocalDateTime getDato() {
        return dato;
    }

    public void setDato(LocalDateTime dato) {
        this.dato = dato;
    }

    public Konto getKonto() {
        return konto;
    }

    public void setKonto(Konto konto) {
        this.konto = konto;
    }

    public String getTekst() {
        return tekst;
    }

    public void setTekst(String tekst) {
        this.tekst = tekst;
    }

    public String getFirma() {
        return firma;
    }

    public void setFirma(String firma) {
        this.firma = firma;
    }

    public String getKontaktperson() {
        return kontaktperson;
    }

    public void setKontaktperson(String kontaktperson) {
        this.kontaktperson = kontaktperson;
    }

    public double getBelob() {
        return belob;
    }

    public void setBelob(double belob) {
        this.belob = belob;
    }

    @Override
    public String toString() {
        return "Bogforing{" +
                "bogforing_id=" + bogforing_id +
                ", dato=" + dato +
                ", konto=" + konto +
                ", tekst='" + tekst + '\'' +
                ", firma='" + firma + '\'' +
                ", kontaktperson='" + kontaktperson + '\'' +
                ", belob=" + belob +
                '}';
    }

    public static class BogforingBuilder {
        private Konto konto;
        private String beskrivelse;
        private LocalDateTime dato;
        private String firma;
        private String kontaktperson;
        private double belob;

        public BogforingBuilder(Konto konto, String beskrivelse, LocalDateTime dato, double belob) {
            this.konto = konto;
            this.beskrivelse = beskrivelse;
            this.dato = dato;
            this.belob = belob;
        }

        public BogforingBuilder withFirma(String firma) {
            this.firma = firma;
            return this;
        }

        public BogforingBuilder withKontaktperson(String kontaktperson) {
            this.kontaktperson = kontaktperson;
            return this;
        }

        public Bogforing build() {
            return new Bogforing(this);
        }
    }
}
