import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import { useState } from "react";
function Value() {
  const [className, setClassName] = useState("collapsed");

  return (
    <div className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left Side */}
        <div className="v-left">
          <div className="image-container">
            <img
              src="./value.png"
              alt="value"
              className="image"
              loading="lazy"
            />
          </div>
        </div>
        {/* right Side */}
        <div className="flexColStart v-right">
          <span className="span-head">Our Value</span>
          <span className="span-subHead">What Values we can Offer You</span>
          <span className="span-body">
            loremashfdakihdkahdhahdLKHFALJKSHFGSHFGEURGFHSGJGD
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  uuid={index}
                  className={`accordionItem ${className}`}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter acordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="span-subHead">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="span-body">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Value;
