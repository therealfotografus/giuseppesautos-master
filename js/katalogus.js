function setup_car_imgs(){
    const imgs = [...document.querySelectorAll("[data-car]")]

    imgs.forEach((element, index) => {
        element.src = get_img_path(element.getAttribute("data-car"));
    })
}
setup_car_imgs()

function popup_modal(text){
    if (!text) return;
    
    var modal = new bootstrap.Modal(document.getElementById("m_dialog"));
    var m_title = document.getElementById("m_dialog-title");
    var m_img = document.getElementById("m_dialog-img");

    modal.show();
    m_title.innerHTML = text || "Ennek nem kellene megtörténnie";
    m_img.src = get_img_path(text) || "/imgs/katalogus.png"
}
function close_modal(){
    var modal = new bootstrap.Modal(document.getElementById("m_dialog"));

    modal.hide();
}

function get_img_path(name){
    switch(name){
        case "Brioso":
            return "/imgs/cars/brioso.png";
            break;
        case "Freecrawler":
            return "/imgs/cars/freecrawler.png";
            break;
        case "Rhapsody":
            return "/imgs/cars/rhapsody.png";
            break;
        case "Panto":
            return "/imgs/cars/panto.png";
            break;
        case "Issi":
            return "/imgs/cars/issi2.png";
            break;
        case "Dilettante":
            return "/imgs/cars/dilettante.png";
            break;
        case "Issi Cabrio":
            return "/imgs/cars/issicabrio.png";
            break;
        case "Asbo":
            return "/imgs/cars/asbo.png";
            break;
        case "Blista":
            return "/imgs/cars/blista.png";
            break;
        case "Club":
            return "/imgs/cars/club.png";
            break;
        case "Kanjo":
            return "/imgs/cars/kanjo.png";
            break;
        case "Weevil":
            return "/imgs/cars/weevil.png";
            break;
        case "Prairie":
            return "/imgs/cars/prairie.png";
            break;
        case "Brioso Classic":
            return "/imgs/cars/briosoclassic.png";
            break;
        case "Jackal":
            return "/imgs/cars/jackal.png";
            break;
        case "Oracle":
            return "/imgs/cars/oracle2.png";
            break;
        case "Oracle XS":
            return "/imgs/cars/oracle.png";
            break;
        case "Sentinel XS":
            return "/imgs/cars/sentinelxs.png";
            break;
        case "Zion Cabrio":
            return "/imgs/cars/zioncabrio.png";
            break;
        case "Exemplar":
            return "/imgs/cars/exemplar.png";
            break;
        case "F620":
            return "/imgs/cars/f620.png";
            break;
        case "Felon GT":
            return "/imgs/cars/felon2.png";
            break;
        case "Windsor":
            return "/imgs/cars/windsor.png";
            break;
        case "Ruffian":
            return "/imgs/cars/ruffian.png";
            break;
        case "Akuma":
            return "/imgs/cars/akuma.png";
            break;
        case "Carbon RS":
            return "/imgs/cars/carbonrs.png";
            break;
        case "Bati 801":
            return "/imgs/cars/bati.png";
            break;
        case "Esskey":
            return "/imgs/cars/esskey.png";
            break;
        case "FCR 1000":
            return "/imgs/cars/fcr.png";
            break;
        case "Vader":
            return "/imgs/cars/vader.png";
            break;
        case "Jetski":
            return "/imgs/cars/seashark.png";
            break;
        case "Defiler":
            return "/imgs/cars/defiler.png";
            break;
        case "Bagger":
            return "/imgs/cars/bagger.png";
            break;
        case "Double T":
            return "/imgs/cars/double.png";
            break;
        case "Manchez Scout":
            return "/imgs/cars/manchezscout.png";
            break;
        case "Daemon":
            return "/imgs/cars/daemon.png";
            break;
        case "Hexer":
            return "/imgs/cars/hexer.png";
            break;
        case "Rat Bike":
            return "/imgs/cars/ratbike.png";
            break;
        case "Avarus":
            return "/imgs/cars/avarus.png";
            break;
        case "Hakuchou Drag":
            return "/imgs/cars/hakuchou2.png";
            break;
        case "Diabolus":
            return "/imgs/cars/diabolus.png";
            break;
        case "PCJ 600":
            return "/imgs/cars/pcj.png";
            break;
        case "Wolfsbane":
            return "/imgs/cars/wolfsbane.png";
            break;
        case "FCR 1000 Custom":
            return "/imgs/cars/fcr2.png";
            break;
        case "Vortex":
            return "/imgs/cars/vortex.png";
            break;
        case "Sentinel":
            return "/imgs/cars/sentinel.png";
            break;
        case "Windsor Drop":
            return "/imgs/cars/windsor2.png";
            break;
        case "Hakuchou":
            return "/imgs/cars/hakuchou.png";
            break;
        case "Bati 801RR":
            return "/imgs/cars/bati2.png";
            break;
        case "Cliffhanger":
            return "/imgs/cars/cliffhanger.png";
            break;
        case "Diabolus Custom":
            return "/imgs/cars/diabolus2.png";
            break;
        case "BF400":
            return "/imgs/cars/bf400.png";
            break;
        case "Sanctus":
            return "/imgs/cars/sanctus.png";
            break;
        case "Nightblade":
            return "/imgs/cars/nightblade.png";
            break;
        case "Sanchez":
            return "/imgs/cars/sanchez.png";
            break;
        case "Innovation":
            return "/imgs/cars/innovation.png";
            break;
        case "Manchez":
            return "/imgs/cars/manchez.png";
            break;
        case "Thrust":
            return "/imgs/cars/thrust.png";
            break;
        case "Zombie Chopper":
            return "/imgs/cars/zombieb.png";
            break;
        case "Zombie Bobber":
            return "/imgs/cars/zombiea.png";
            break;
        case "Chimera":
            return "/imgs/cars/chimera.png";
            break;
        case "Enduro":
            return "/imgs/cars/enduro.png";
            break;
        case "Faggio":
            return "/imgs/cars/faggio.png";
            break;
        case "Declasse Yosemite":
            return "/imgs/cars/yosemite2.png";
            break;
        case "Sabre Turbo Custom":
            return "/imgs/cars/sabregt.png";
            break;
        case "Tropic (4 személyes)":
            return "/imgs/cars/tropic2.png";
            break;
        case "Clique":
            return "/imgs/cars/clique.png";
            break;
        case "Impaler":
            return "/imgs/cars/impaler.png";
            break;
        case "Dominator GTX":
            return "/imgs/cars/dominator3.png";
            break;
        case "Dominator":
            return "/imgs/cars/dominator.png";
            break;
        case "Blade":
            return "/imgs/cars/blade.png";
            break;
        case "Dinghy (4 személyes)":
            return "/imgs/cars/dinghy4.png";
            break;
        case "Dukes":
            return "/imgs/cars/dukes.png";
            break;
        case "Coquette BlackFin":
            return "/imgs/cars/coquette3.png";
            break;
        case "Ruiner":
            return "/imgs/cars/ruiner.png";
            break;
        case "Virgo":
            return "/imgs/cars/virgo3.png";
            break;
        case "Virgo Custom":
            return "/imgs/cars/virgo2.png";
            break;
        case "Vamos":
            return "/imgs/cars/vamos.png";
            break;
        case "Voodoo":
            return "/imgs/cars/voodoo2.png";
            break;
        case "Vigero":
            return "/imgs/cars/vigero.png";
            break;
        case "Gauntlet Classic":
            return "/imgs/cars/gauntlet3.png";
            break;
        case "Picador":
            return "/imgs/cars/picador.png";
            break;
        case "Itali RSX":
            return "/imgs/cars/italirsx.png";
            break;
        case "Kuruma":
            return "/imgs/cars/kuruma.png";
            break;
        case "Stallion":
            return "/imgs/cars/stallion.png";
            break;
        case "Deviant":
            return "/imgs/cars/deviant.png";
            break;
        case "Hermes":
            return "/imgs/cars/hermes.png";
            break;
        case "Slamvan Custom":
            return "/imgs/cars/slamvan3.png";
            break;
        case "Tampa":
            return "/imgs/cars/tampa.png";
            break;
        case "Phoenix":
            return "/imgs/cars/phoenix.png";
            break;
        case "Gauntlet":
            return "/imgs/cars/gauntlet.png";
            break;
        case "Hustler":
            return "/imgs/cars/Hustler.png";
            break;
        case "Buccaneer Custom":
            return "/imgs/cars/buccaneer2.png";
            break;
        case "Buccaneer":
            return "/imgs/cars/buccaneer.png";
            break;
        case "Ellie":
            return "/imgs/cars/ellie.png";
            break;
        case "Faction Custom":
            return "/imgs/cars/faction2.png";
            break;
        case "Nightshade":
            return "/imgs/cars/nightshade.png";
            break;
        case "Yosemite":
            return "/imgs/cars/yosemite.png";
            break;
        case "Faction":
            return "/imgs/cars/faction.png";
            break;
        case "Faction":
            return "/imgs/cars/faction.png";
            break;
        case "Hotknife":
            return "/imgs/cars/hotknife.png";
            break;
        case "Chino Custom":
            return "/imgs/cars/chino2.png";
            break;
        case "Chino":
            return "/imgs/cars/chino.png";
            break;
        case "Voodoo Custom":
            return "/imgs/cars/voodoo.png";
            break;
        case "Bravado Rat-Truck":
            return "/imgs/cars/ratloader2.png";
            break;
        case "Bifta":
            return "/imgs/cars/bifta.png";
            break;
        case "Street Blazer":
            return "/imgs/cars/blazer.png";
            break;
        case "Hot Rod Blazer":
            return "/imgs/cars/blazer4.png";
            break;
        case "Coil Brawler":
            return "/imgs/cars/brawler.png";
            break;
        case "Annis Hellion":
            return "/imgs/cars/hellion.png";
            break;
        case "Bodhi":
            return "/imgs/cars/bodhi2.png";
            break;
        case "Everon":
            return "/imgs/cars/everon.png";
            break;
        case "Rancher XL":
            return "/imgs/cars/rancherxl.png";
            break;
        case "Kalahari":
            return "/imgs/cars/kalahari.png";
            break;
        case "Vagrant":
            return "/imgs/cars/vagrant.png";
            break;
        case "Outlaw":
            return "/imgs/cars/outlaw.png";
            break;
        case "Sandking":
            return "/imgs/cars/sandking.png";
            break;
        case "Yosemite Rancher":
            return "/imgs/cars/yosemiterancher.png";
            break;
        case "Dune Buggy":
            return "/imgs/cars/dune.png";
            break;
        case "Riata":
            return "/imgs/cars/riata.png";
            break;
        case "Guardian":
            return "/imgs/cars/guardian.png";
            break;
        case "Dubsta 6x6":
            return "/imgs/cars/dubsta3.png";
            break;
        case "Rebel":
            return "/imgs/cars/rebel2.png";
            break;
        case "Schafter":
            return "/imgs/cars/schafter2.png";
            break;
        case "Fugitive":
            return "/imgs/cars/fugitive.png";
            break;
        case "Primo":
            return "/imgs/cars/primo.png";
            break;
        case "Intruder":
            return "/imgs/cars/intruder.png";
            break;
        case "Warrener":
            return "/imgs/cars/warrener.png";
            break;
        case "Asterope":
            return "/imgs/cars/asterope.png";
            break;
        case "Surge":
            return "/imgs/cars/surge.png";
            break;
        case "Premier":
            return "/imgs/cars/premier.png";
            break;
        case "Asea":
            return "/imgs/cars/asea.png";
            break;
        case "Regina":
            return "/imgs/cars/regina.png";
            break;
        case "Stanier":
            return "/imgs/cars/stanier.png";
            break;
        case "Stratum":
            return "/imgs/cars/stratum.png";
            break;
        case "Tailgater":
            return "/imgs/cars/tailgater.png";
            break;
        case "Washington":
            return "/imgs/cars/washington.png";
            break;
        case "Super Diamond":
            return "/imgs/cars/superdiamond.png";
            break;
        case "Ingot":
            return "/imgs/cars/ingot.png";
            break;
        case "Cognoscenti":
            return "/imgs/cars/cognoscenti.png";
            break;
        case "Cognoscenti55":
            return "/imgs/cars/cognoscenti55.png";
            break;
        case "Alpha":
            return "/imgs/cars/alpha.png";
            break;
        case "Bestia GTS":
            return "/imgs/cars/bestiagts.png";
            break;
        case "Futo":
            return "/imgs/cars/futo.png";
            break;
        case "Lynx":
            return "/imgs/cars/lynx.png";
            break;
        case "Glendale Custom":
            return "/imgs/cars/glendalecustom.png";
            break;
        case "Glendale":
            return "/imgs/cars/glendale.png";
            break;
        case "Stafford":
            return "/imgs/cars/stafford.png";
            break;
        case "Emperor":
            return "/imgs/cars/emperor.png";
            break;
        case "Pariah":
            return "/imgs/cars/pariah.png";
            break;
        case "Comet SR":
            return "/imgs/cars/comet5.png";
            break;
        case "Elegy RH8":
            return "/imgs/cars/elegy2.png";
            break;
        case "Neon":
            return "/imgs/cars/neon.png";
            break;
        case "Elegy Retro Custom":
            return "/imgs/cars/elegy.png";
            break;
        case "Schlagen GT":
            return "/imgs/cars/schlagen.png";
            break;
        case "Massacro":
            return "/imgs/cars/massacro.png";
            break;
        case "Flash GT":
            return "/imgs/cars/flashgt.png";
            break;
        case "9F":
            return "/imgs/cars/9f.png";
            break;
        case "9F Cabrio":
            return "/imgs/cars/9fcabrio.png";
            break;
        case "Specter Custom":
            return "/imgs/cars/specter2.png";
            break;
        case "Specter":
            return "/imgs/cars/specter.png";
            break;
        case "Raiden":
            return "/imgs/cars/raiden.png";
            break;
        case "Surano":
            return "/imgs/cars/surano.png";
            break;
        case "Seven-70":
            return "/imgs/cars/seven70.png";
            break;
        case "Comet":
            return "/imgs/cars/comet2.png";
            break;
        case "Comet Retro Custom":
            return "/imgs/cars/comet3.png";
            break;
        case "Sentinel Classic":
            return "/imgs/cars/sentinel3.png";
            break;
        case "Carbonizzare":
            return "/imgs/cars/carbonizzare.png";
            break;
        case "Sultan":
            return "/imgs/cars/sultan.png";
            break;
        case "Banshee":
            return "/imgs/cars/banshee.png";
            break;
        case "Jester":
            return "/imgs/cars/jester.png";
            break;
        case "Coquette":
            return "/imgs/cars/coquette.png";
            break;
        case "GB200":
            return "/imgs/cars/gb200.png";
            break;
        case "Hotring Sabre":
            return "/imgs/cars/hotring.png";
            break;
        case "Omnis":
            return "/imgs/cars/omnis.png";
            break;
        case "Ruston":
            return "/imgs/cars/ruston.png";
            break;
        case "Khamelion":
            return "/imgs/cars/khamelion.png";
            break;
        case "Drift Tampa (Sport)":
            return "/imgs/cars/tampa2.png";
            break;
        case "Komoda":
            return "/imgs/cars/komoda.png";
            break;
        case "Feltzer":
            return "/imgs/cars/feltzer2.png";
            break;
        case "Imorgon":
            return "/imgs/cars/imorgon.png";
            break;
        case "Sultan Classic":
            return "/imgs/cars/sultanclassic.png";
            break;
        case "Italigto":
            return "/imgs/cars/italigto.png";
            break;
        case "Verlierer":
            return "/imgs/cars/verlierer2.png";
            break;
        case "Jester Classic":
            return "/imgs/cars/jester3.png";
            break;
        case "Buffalo S":
            return "/imgs/cars/buffalo2.png";
            break;
        case "Rapid GT Classic":
            return "/imgs/cars/rapidgtclassic.png";
            break;
        case "Revolter":
            return "/imgs/cars/revolter.png";
            break;
        case "Coquette D10":
            return "/imgs/cars/coquetted10.png";
            break;
        case "Penumbra FF":
            return "/imgs/cars/penumbraff.png";
            break;
        case "Sugoi":
            return "/imgs/cars/sugoi.png";
            break;
        case "Schafter V12":
            return "/imgs/cars/schafter4.png";
            break;
        case "Rapid GT":
            return "/imgs/cars/rapidgt2.png";
            break;
        case "Furore GT":
            return "/imgs/cars/furoregt.png";
            break;
        case "Buffalo":
            return "/imgs/cars/buffalo.png";
            break;
        case "Fusilade":
            return "/imgs/cars/fusilade.png";
            break;
        case "Schwarzer":
            return "/imgs/cars/schwarzer.png";
            break;
        case "Penumbra":
            return "/imgs/cars/penumbra.png";
            break;
        case "Streiter":
            return "/imgs/cars/streiter.png";
            break;
        case "Blista Compact":
            return "/imgs/cars/blista2.png";
            break;
        case "Cheetah Classic":
            return "/imgs/cars/cheetah2.png";
            break;
        case "Stirling GT":
            return "/imgs/cars/stirlinggt.png";
            break;
        case "Infernus Classic":
            return "/imgs/cars/infernus2.png";
            break;
        case "Retinue":
            return "/imgs/cars/retinue.png";
            break;
        case "Pigalle":
            return "/imgs/cars/pigalle.png";
            break;
        case "Pigalle":
            return "/imgs/cars/pigalle.png";
            break;
        case "190z":
            return "/imgs/cars/190z.png";
            break;
        case "Monroe":
            return "/imgs/cars/monroe.png";
            break;
        case "Cheburek":
            return "/imgs/cars/cheburek.png";
            break;
        case "GT500":
            return "/imgs/cars/gt500.png";
            break;
        case "Mamba":
            return "/imgs/cars/mamba.png";
            break;
        case "Michelli GT":
            return "/imgs/cars/michelli.png";
            break;
        case "Stinger GT":
            return "/imgs/cars/stingergt.png";
            break;
        case "Stinger":
            return "/imgs/cars/stinger.png";
            break;
        case "Casco":
            return "/imgs/cars/casco.png";
            break;
        case "Swinger":
            return "/imgs/cars/swinger.png";
            break;
        case "Torero":
            return "/imgs/cars/torero.png";
            break;
        case "Turismo Classic":
            return "/imgs/cars/turismo2.png";
            break;
        case "Coquette Classic":
            return "/imgs/cars/coquette2.png";
            break;
        case "Peyote Custom":
            return "/imgs/cars/peyotecustom.png";
            break;
        case "Fagaloa":
            return "/imgs/cars/fagaloa.png";
            break;
        case "Retinue MK2":
            return "/imgs/cars/retinue2.png";
            break;
        case "Manana Custom":
            return "/imgs/cars/manana2.png";
            break;
        case "Franken Stange":
            return "/imgs/cars/frankenstange.png";
            break;
        case "Z Type":
            return "/imgs/cars/ztype.png";
            break;
        case "Roosevelt Valor":
            return "/imgs/cars/rooseveltvalor.png";
            break;
        case "Nebula Turbo":
            return "/imgs/cars/nebula.png";
            break;
        case "Roosevelt":
            return "/imgs/cars/roosevelt.png";
            break;
        case "Manana":
            return "/imgs/cars/manana.png";
            break;
        case "Peyote":
            return "/imgs/cars/peyote.png";
            break;
        case "Tornado":
            return "/imgs/cars/tornado.png";
            break;
        case "Krieger":
            return "/imgs/cars/krieger.png";
            break;
        case "Vagner":
            return "/imgs/cars/vagner.png";
            break;
        case "RE-7B":
            return "/imgs/cars/re7b.png";
            break;
        case "XA-21":
            return "/imgs/cars/xa21.png";
            break;
        case "Autarch":
            return "/imgs/cars/autarch.png";
            break;
        case "Tempesta":
            return "/imgs/cars/tempesta.png";
            break;
        case "Zentorno":
            return "/imgs/cars/zentorno.png";
            break;
        case "Visione":
            return "/imgs/cars/visione.png";
            break;
        case "X80 Proto":
            return "/imgs/cars/prototipo.png";
            break;
        case "ETR1":
            return "/imgs/cars/etr1.png";
            break;
        case "Tezeract":
            return "/imgs/cars/tezeract.png";
            break;
        case "T20":
            return "/imgs/cars/t20.png";
            break;
        case "Tyrant":
            return "/imgs/cars/tyrant.png";
            break;
        case "Osiris":
            return "/imgs/cars/osiris.png";
            break;
        case "Tyrus":
            return "/imgs/cars/tyrus.png";
            break;
        case "Nero":
            return "/imgs/cars/nero.png";
            break;
        case "FMJ":
            return "/imgs/cars/fmj.png";
            break;
        case "Itali GTB":
            return "/imgs/cars/italigtb.png";
            break;
        case "Turismo R":
            return "/imgs/cars/turismor.png";
            break;
        case "Entity XFxx":
            return "/imgs/cars/entityxf.png";
            break;
        case "Penetrator":
            return "/imgs/cars/penetrator.png";
            break;
        case "Reaper":
            return "/imgs/cars/reaper.png";
            break;
        case "Infernus":
            return "/imgs/cars/infernus.png";
            break;
        case "811":
            return "/imgs/cars/811.png";
            break;
        case "Cheetah":
            return "/imgs/cars/cheetah.png";
            break;
        case "GP1":
            return "/imgs/cars/gp1.png";
            break;
        case "SC1":
            return "/imgs/cars/sc1.png";
            break;
        case "Vacca":
            return "/imgs/cars/vacca.png";
            break;
        case "Sultan RS":
            return "/imgs/cars/sultanrs.png";
            break;
        case "Banshee 900R":
            return "/imgs/cars/banshee900r.png";
            break;
        case "Taipan":
            return "/imgs/cars/taipan.png";
            break;
        case "Voltic":
            return "/imgs/cars/voltic.png";
            break;
        case "Bullet":
            return "/imgs/cars/bullet.png";
            break;
        case "Adder":
            return "/imgs/cars/adder.png";
            break;
        case "Furia":
            return "/imgs/cars/furia.png";
            break;
        case "Cyclone":
            return "/imgs/cars/cyclone.png";
            break;
        case "Entity XXR":
            return "/imgs/cars/entity2.png";
            break;
        case "Emerus":
            return "/imgs/cars/emerus.png";
            break;
        case "Tigon":
            return "/imgs/cars/tigon.png";
            break;
        case "Tropos":
            return "/imgs/cars/tropos.png";
            break;
        case "V STR":
            return "/imgs/cars/vstr.png";
            break;
        case "Toros":
            return "/imgs/cars/toros.png";
            break;
        case "Huntley":
            return "/imgs/cars/huntley.png";
            break;
        case "Baller LE":
            return "/imgs/cars/baller4.png";
            break;
        case "Baller":
            return "/imgs/cars/baller.png";
            break;
        case "FQ2":
            return "/imgs/cars/fq2.png";
            break;
        case "Gresley":
            return "/imgs/cars/gresley.png";
            break;
        case "BeeJay XL":
            return "/imgs/cars/beejayxl.png";
            break;
        case "Cavalcade":
            return "/imgs/cars/cavalcade.png";
            break;
        case "Mesa":
            return "/imgs/cars/mesa.png";
            break;
        case "Mesa3":
            return "/imgs/cars/mesa3.png";
            break;
        case "Sadler":
            return "/imgs/cars/sadler.png";
            break;
        case "Mesa Merryweather":
            return "/imgs/cars/Mesa Merryweather.png";
            break;
        case "Dubsta":
            return "/imgs/cars/dubsta.png";
            break;
        case "Habanero":
            return "/imgs/cars/habanero.png";
            break;
        case "Rocoto":
            return "/imgs/cars/rocoto.png";
            break;
        case "XLS":
            return "/imgs/cars/xls.png";
            break;
        case "Seminole Frontier":
            return "/imgs/cars/seminole.png";
            break;
        case "Rebla GTS":
            return "/imgs/cars/rebla.png";
            break;
        case "Landstalker":
            return "/imgs/cars/landstalker.png";
            break;
        case "LandstalkerXL":
            return "/imgs/cars/landstalkerxl.png";
            break;
        case "Patriot":
            return "/imgs/cars/patriot.png";
            break;
        case "Rumpo":
            return "/imgs/cars/rumpo.png";
            break;
        case "Speedo":
            return "/imgs/cars/speedo.png";
            break;
        case "Youga":
            return "/imgs/cars/youga.png";
            break;
        case "Youga Classic":
            return "/imgs/cars/youga2.png";
            break;
        case "Paradise":
            return "/imgs/cars/paradise.png";
            break;
        case "Pony":
            return "/imgs/cars/pony.png";
            break;
        case "Burrito":
            return "/imgs/cars/burrito3.png";
            break;
        case "G Burrito":
            return "/imgs/cars/burrito3.png";
            break;
        case "Surfer":
            return "/imgs/cars/surfer.png";
            break;
        case "Minivan Custom":
            return "/imgs/cars/minivan2.png";
            break;
        case "Youga Classic 4x4":
            return "/imgs/cars/yougaclassic4x4.png";
            break;
        case "Rumpo Custom":
            return "/imgs/cars/rumpo3.png";
            break;
        case "Bobcat XL":
            return "/imgs/cars/bobcatxl.png";
            break;
        case "Jet Max":
            return "/imgs/cars/jetmax.png";
            break;
        case "Trailer":
            return "/imgs/cars/boattrailer.png";
            break;
        default:
            return "/imgs/katalogus.png";
    }
}