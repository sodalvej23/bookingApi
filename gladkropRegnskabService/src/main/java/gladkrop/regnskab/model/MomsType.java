package gladkrop.regnskab.model;

/**
 * Created by HansFischer on 03-01-2015.
 */
public enum MomsType {
    EJMOMS("Ej Moms"), MOMS("Moms");

    private MomsType(String momsType) {
        this.momsType = momsType;
    }

    private String momsType;

    public static MomsType getMomsType(String moms) {
        return MomsType.valueOf(moms);
    }

    public static MomsType[] getAllMomsTyper() {
        return MomsType.values();
    }

}
