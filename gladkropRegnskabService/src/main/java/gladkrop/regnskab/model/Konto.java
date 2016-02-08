package gladkrop.regnskab.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by HansFischer on 03-01-2015.
 */

@NamedQueries({
        @NamedQuery(name = "Konto.findAll", query = "SELECT K FROM Konto K"),
        @NamedQuery(name = "Konto.findByKontonr", query = "SELECT K FROM Konto K where K.kontonr = :kontonr")
})
@Entity
@Table(name = "KONTO")
@XmlRootElement(name = "konto")
@XmlAccessorType(XmlAccessType.FIELD)
public class Konto {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "KONTO_ID", columnDefinition = "CHAR(40)")
    private String konto_id;

    @Column(name = "KONTONR", nullable = false, unique = true)
    @XmlElement(required = true)
    private int kontonr;

    @Column(name = "KONTONAVN", nullable = false, length = 75)
    @XmlElement(required = true)
    private String kontonavn;

    @Enumerated(EnumType.STRING)
    @XmlElement
    @Column(name = "KONTOTYPE", length = 20)
    private KontoType kontotype;

    @Enumerated(EnumType.STRING)
    @XmlElement
    @Column(name = "MOMSTYPE", length = 20)
    private MomsType momstype;

    @Column(name = "MOMSFRADRAG", length = 3)
    @XmlElement
    private int momsfradrag;

    @Column(name = "INDKOMSTFRADRAG", length = 3)
    @XmlElement
    private int indkomstfradrag;

    @Enumerated(EnumType.STRING)
    @Column(name = "VARETYPE", length = 20)
    @XmlElement
    private VareType vareType;
/*
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Collection<Bogforing> bogforingCollection;
*/

    public String getKonto_id() {
        return konto_id;
    }

    public void setKonto_id(String kontoplan_id) {
        this.konto_id = konto_id;
    }

    public int getKontonr() {
        return kontonr;
    }

    public void setKontonr(int kontonr) {
        this.kontonr = kontonr;
    }

    public String getKontonavn() {
        return kontonavn;
    }

    public void setKontonavn(String kontonavn) {
        this.kontonavn = kontonavn;
    }

    public KontoType getKontotype() {
        return kontotype;
    }

    public void setKontotype(KontoType kontotype) {
        this.kontotype = kontotype;
    }

    public MomsType getMomstype() {
        return momstype;
    }

    public void setMomstype(MomsType momstype) {
        this.momstype = momstype;
    }

    public int getMomsfradrag() {
        return momsfradrag;
    }

    public void setMomsfradrag(int momsfradrag) {
        this.momsfradrag = momsfradrag;
    }

    public int getIndkomstfradrag() {
        return indkomstfradrag;
    }

    public void setIndkomstfradrag(int indkomstfradrag) {
        this.indkomstfradrag = indkomstfradrag;
    }

    public VareType getVareType() {
        return vareType;
    }

    public void setVareType(VareType vareType) {
        this.vareType = vareType;
    }

    /*
        public Collection<Bogforing> getBogforingCollection() { return bogforingCollection; }

        public void setBogforingCollection(Collection<Bogforing> bogforingCollection) { this.bogforingCollection = bogforingCollection; }
    */
    @Override
    public String toString() {
        return "Konto{" +
                "kontonr=" + kontonr +
                ", kontonavn='" + kontonavn + '\'' +
                ", kontotype=" + kontotype +
                ", momstype=" + momstype +
                ", momsfradrag=" + momsfradrag +
                ", indkomstfradrag=" + indkomstfradrag +
                ", vareType=" + vareType +
                '}';
    }
}
