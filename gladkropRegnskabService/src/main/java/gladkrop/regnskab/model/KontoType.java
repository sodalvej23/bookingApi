package gladkrop.regnskab.model;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by HansFischer on 03-01-2015.
 */
@XmlRootElement
@XmlEnum(String.class)
public enum KontoType {
    @XmlEnumValue("Indtægt")INDTAEGT("Indtægt"),
    @XmlEnumValue("Udgift")UDGIFT("Udgift");

    private KontoType(String kontotype) {
        this.kontotype = kontotype;
    }

    private String kontotype;

    public KontoType getKontoType(String konto) {
        return KontoType.valueOf(konto);
    }

    public static String[] getKontoTypeAsString() {
        String[] kontotype = new String[KontoType.values().length];
        for (int i = 0; i < KontoType.values().length; i++) {
            kontotype[i] = KontoType.values()[i].kontotype;
        }
        return kontotype;
    }
}
