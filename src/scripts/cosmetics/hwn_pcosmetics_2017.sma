#include <amxmodx>

#include <hwn>

#include <api_player_cosmetic>

#define PLUGIN "[Hwn] Player Cosmetic 2017"
#define AUTHOR "Hedgehog Fog"

#define UNUSUAL_COLOR {HWN_COLOR_GREEN_DARK_F}

public plugin_precache()
{
    // TODO: add new player cosmetic

    /*
        Hwn_Cosmetic_Register(
            PCosmetic_Register(
                .szName = "",
                .modelIndex = precache_model(""),
                .groups = (PCosmetic_Group_),
                .fUnusualColor = UNUSUAL_COLOR
            )
        );
    */
}

public plugin_init()
{
    register_plugin(PLUGIN, HWN_VERSION, AUTHOR);
}