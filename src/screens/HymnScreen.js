import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function HymnScreen() {
  return (
    <div className="accord__container">
      <div className="words__container">
        <div className="text">SING JOYFULLY</div>
      </div>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Hymn 1 - All hail the power of Jesus' name!
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="hymn_container">
              <div className="hymn__box">
                <p>
                  {" "}
                  1. All hail the power of Jesus' name! Let angels prostrate
                  fall; bring forth the royal diadem, and crown him Lord of all.
                  Bring forth the royal diadem, and crown him Lord of all.
                </p>
              </div>
              <div className="hymn__box">
                <p>
                  2. Crown him, ye martyrs of your God, who from his altar call;
                  extol the Stem of Jesse's Rod, and crown him Lord of all.
                  Extol the Stem of Jesse's Rod, and crown him Lord of all.
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  3. Ye chosen seed of Israel's race, ye ransomed from the fall,
                  hail him who saves you by his grace, and crown him Lord of
                  all. Hail him who saves you by his grace, and crown him Lord
                  of all. 
                </p>
              </div>
              <div className="hymn__box">
                <p>
                  4. Ye Gentle Sinners, ne'er forget the wormwood and the gall,
                  go spread your trophies at his feet, and crown him Lord of
                  all. Go spread your trophies at his feet, and crown him Lord
                  of all.
                </p>
              </div>
              <div className="hymn__box">
                <p>
                  5.  Let every kindred, every tribe on this terrestrial ball,
                  to him all majesty ascribe, and crown him Lord of all. To him
                  all majesty ascribe, and crown him Lord of all.
                </p>
              </div>
              <div className="hymn__box">
                <p>
                  6. O that with yonder sacred throng we at his feet may fall!
                  We'll join the everlasting song, and crown him Lord of all.
                  We'll join the everlasting song, and crown him Lord of all.
                </p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Hymn 2 -  Great is Thy Faithfulness
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="hymn_container">
              <div className="hymn__box">
                <p>
                  1. Great is Thy faithfulness,” O God my Father, There is no
                  shadow of turning with Thee; Thou changest not, Thy
                  compassions, they fail not As Thou hast been Thou forever wilt
                  be. “Great is Thy faithfulness!” “Great is Thy faithfulness!”
                  Morning by morning new mercies I see; All I have needed Thy
                  hand hath provided “Great is Thy faithfulness,” Lord, unto me!
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  2. Summer and winter, and springtime and harvest, Sun, moon
                  and stars in their courses above, Join with all nature in
                  manifold witness To Thy great faithfulness, mercy and love.
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  3. Pardon for sin and a peace that endureth, Thine own dear
                  presence to cheer and to guide; Strength for today and bright
                  hope for tomorrow, Blessings all mine, with ten thousand
                  beside!
                </p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Hymn 3 - Revive thy work, o Lord
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="hymn_container">
              <div className="hymn__box">
                <p>
                  1 Revive thy work, O Lord, thy mighty arm make bare; speak
                  with the voice that wakes the dead, and make thy people hear.
                  Refrain: Revive thy works, o Lord While here to thee we bow;
                  Descend O gracious Lord descend, oh! come, and bless us now
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  2 Revive thy work, O Lord, disturb this sleep of death;
                  quicken the smould'ring embers now by thine almighty breath.
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  3 Revive thy work, O Lord, create soul-thirst for thee; and
                  hung'ring for the Bread of Life O may our spirits be.
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  4 Revive thy work, O Lord, exalt thy precious name; and, by
                  the Holy Ghost, our love for thee and thine inflame
                </p>
              </div>
              <div className="hymn__box">
                <p>
                  5 Revive thy work, O Lord, And give refreshing show'rs; the
                  glory shall be all thine own, the blessing, Lord, be ours.
                </p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Hymn 4 - Through the Love of God, our Saviour
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="hymn_container">
              <div className="hymn__box">
                <p>
                  1. Through the love of God our Saviour, All will be well; Free
                  and changeless is His favour, All, all is well: Precious is
                  the blood that healed us; Perfect is the grace that sealed us;
                  Strong the hand stretched forth to shield us; All must be
                  well.
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  2. Though we pass through tribulation, All will be well;
                  Christ hath purchased full salvation, All, all is well: Happy
                  still in God confiding; Fruitful, if in Christ abiding; Holy,
                  through the Spirit's guiding; All must be well.
                </p>
              </div>{" "}
              <div className="hymn__box">
                <p>
                  3. We expect a bright tomorrow; All will be well; Faith can
                  sing through days of sorrow, All, all is well: On our Father's
                  love relying, Jesus every need supplying, Then in living or in
                  dying, All must be well.
                </p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
