package gladkrop.regnskab.model;

/**
 * Created by HansFischer on 03-01-2015.
 */
public enum VareType {
    VARE("Vare"), YDELSE("Ydelse");

    private VareType(String vareType) {
        this.vareType = vareType;
    }

    private String vareType;

}
