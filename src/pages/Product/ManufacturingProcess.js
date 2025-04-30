import React from "react";
import { Link } from "react-router-dom";

export default function ManufacturingProcess({ appData }) {
    return (
        <>
            {appData && appData.category && appData.category.id === 1 && (
                <section className="category-content-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    style={{
                                        marginBottom: "40px",
                                        marginTop: "40px",
                                    }}
                                    className="head-block text-center aos-init"
                                    data-aos="fade-In"
                                    data-aos-offset="300"
                                >
                                    <h2 className="text-black">
                                        Our Manufacturing{" "}
                                        <span className="color-orange">
                                            {" "}
                                            Process
                                        </span>
                                    </h2>
                                    <p style={{ textAlign: "center" }}>
                                        Mevive directly purchases fresh veggies
                                        from the farms. Procured fresh
                                        vegetables are graded, washed, peeled,
                                        and cut into various sizes as per
                                        customer specifications. Then, it
                                        undergoes a hot air dehydration process
                                        in a conveyor belt where the moisture
                                        will be removed. Further, the materials
                                        are allowed to cool. It is then tested
                                        for quality parameters to get sterile
                                        packed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="main-timeline aos-init"
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                >
                                    <div className="down bounce">
                                        <span className="fa fa-angle-double-down"></span>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/vegetable.webp"
                                                    alt="Receiving Fresh Vegetables"
                                                />
                                            </span>
                                            <h3 className="title">Step 1</h3>
                                            <p className="description">
                                                Receiving Fresh Vegetables
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/grating.webp"
                                                    alt="Grading"
                                                />
                                            </span>
                                            <h3 className="title">Step 2</h3>
                                            <p className="description">
                                                Grading
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/cloth.webp"
                                                    width="100%"
                                                    alt="Cleaning / Washing"
                                                />
                                            </span>
                                            <h3 className="title">Step 3</h3>
                                            <p className="description">
                                                Cleaning / Washing
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/cutting-board.webp"
                                                    alt="Peeling / Slicing / Cutting"
                                                />
                                            </span>
                                            <h3 className="title">Step 4</h3>
                                            <p className="description">
                                                Peeling / Slicing / Cutting
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/heat.webp"
                                                    width="100%"
                                                    alt="Hot Air Drying / Dehydration Process"
                                                />
                                            </span>
                                            <h3 className="title">Step 5</h3>
                                            <p className="description">
                                                Hot Air Drying / Dehydration
                                                Process
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/dry.webp"
                                                    width="100%"
                                                    alt="1st stage drying in a imperial drier"
                                                />
                                            </span>
                                            <h3 className="title">Step 6</h3>
                                            <p className="description">
                                                1st stage drying in a imperial
                                                drier
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/conveyor.webp"
                                                    width="100%"
                                                    alt="2nd stage drying in hot air conveyor belt"
                                                />
                                            </span>
                                            <h3 className="title">Step 7</h3>
                                            <p className="description">
                                                2nd stage drying in hot air
                                                conveyor belt
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/snow-proof.webp"
                                                    width="100%"
                                                    alt="Cooling"
                                                />
                                            </span>
                                            <h3 className="title">Step 8</h3>
                                            <p className="description">
                                                Cooling
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/checked.webp"
                                                    width="100%"
                                                    alt="QC Testing"
                                                />
                                            </span>
                                            <h3 className="title">Step 9</h3>
                                            <p className="description">
                                                QC Testing
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/box.webp"
                                                    width="100%"
                                                    alt="Packing / Labelling"
                                                />
                                            </span>
                                            <h3 className="title">Step 10</h3>
                                            <p className="description">
                                                Packing / Labelling
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/delivery-truck.webp"
                                                    width="100%"
                                                    alt="Final Inspection & Dispatch"
                                                />
                                            </span>
                                            <h3 className="title">Step 11</h3>
                                            <p className="description">
                                                Final Inspection & Dispatch
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h3
                                    className="end aos-init"
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                >
                                    End Process
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {appData && appData.category && appData.category.id === 2 && (
                <section className="category-content-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    style={{
                                        marginBottom: "40px",
                                        marginTop: "40px",
                                    }}
                                    className="head-block text-center aos-init"
                                    data-aos="fade-In"
                                    data-aos-offset="300"
                                >
                                    <h2 className="text-black">
                                        Our Manufacturing{" "}
                                        <span className="color-orange">
                                            {" "}
                                            Process
                                        </span>
                                    </h2>
                                    <p style={{ textAlign: "center" }}>
                                        Mevive purchases the farm grow raw
                                        fruits. The procured fresh fruits are
                                        then washed, peeled/cored/destoned from
                                        which juice/pulp will be extracted. The
                                        extracted juice/pulp is homogenized
                                        informally. The extracted clear juice is
                                        sprayed inside the spray dryer with help
                                        of an atomizer. The hot air surrounding
                                        the dryer removes moisture content and
                                        discharges fine powders. The received
                                        powders are cooled and tested for
                                        quality parameters. Finally, they are
                                        sterile packed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="main-timeline aos-init"
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                >
                                    <div className="down bounce">
                                        <span className="fa fa-angle-double-down"></span>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/fruits-juice.webp"
                                                    alt="Receiving Fresh Juice"
                                                />
                                            </span>
                                            <h3 className="title">Step 1</h3>
                                            <p className="description">
                                                Receiving Fresh Juice
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/test-tube.webp"
                                                    alt="QC Testing of raw Material"
                                                />
                                            </span>
                                            <h3 className="title">Step 2</h3>
                                            <p className="description">
                                                QC Testing of raw Material
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/filtration.webp"
                                                    width="100%"
                                                    alt="Filtration"
                                                />
                                            </span>
                                            <h3 className="title">Step 3</h3>
                                            <p className="description">
                                                Filtration
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/kitchen-robot.webp"
                                                    alt="Transfer Juice into Mixing Vessel"
                                                />
                                            </span>
                                            <h3 className="title">Step 4</h3>
                                            <p className="description">
                                                Transfer Juice into Mixing
                                                Vessel
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/waterdrop.webp"
                                                    width="100%"
                                                    alt="Addition of Additive with Water"
                                                />
                                            </span>
                                            <h3 className="title">Step 5</h3>
                                            <p className="description">
                                                Addition of Additive with Water
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/filtration-1.webp"
                                                    width="100%"
                                                    alt="Ultra Filtration"
                                                />
                                            </span>
                                            <h3 className="title">Step 6</h3>
                                            <p className="description">
                                                Ultra Filtration
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/homogenizer.webp"
                                                    width="100%"
                                                    alt="Homogenization"
                                                />
                                            </span>
                                            <h3 className="title">Step 7</h3>
                                            <p className="description">
                                                Homogenization
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/no-water.webp"
                                                    width="100%"
                                                    alt="Spray Drying"
                                                />
                                            </span>
                                            <h3 className="title">Step 8</h3>
                                            <p className="description">
                                                Spray Drying
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/blending-1.webp"
                                                    width="100%"
                                                    alt="Blending / Sieving"
                                                />
                                            </span>
                                            <h3 className="title">Step 9</h3>
                                            <p className="description">
                                                Blending / Sieving
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/metal-loupe.webp"
                                                    width="100%"
                                                    alt="Metal Detection"
                                                />
                                            </span>
                                            <h3 className="title">Step 10</h3>
                                            <p className="description">
                                                Metal Detection
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/delivery-truck.webp"
                                                    width="100%"
                                                    alt="Packaging & Dispatch"
                                                />
                                            </span>
                                            <h3 className="title">Step 11</h3>
                                            <p className="description">
                                                Packaging & Dispatch
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h3
                                    className="end aos-init"
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                >
                                    End Process
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {appData && appData.category && appData.category.id === 3 && (
                <section className="category-content-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    style={{
                                        marginBottom: "40px",
                                        marginTop: "40px",
                                    }}
                                    className="head-block text-center aos-init"
                                    data-aos="fade-In"
                                    data-aos-offset="300"
                                >
                                    <h2 className="text-black">
                                        Our Manufacturing{" "}
                                        <span className="color-orange">
                                            {" "}
                                            Process
                                        </span>
                                    </h2>
                                    <p style={{ textAlign: "center" }}>
                                        Mevive buys the fresh leaves directly
                                        from the farmers. The purchased fresh
                                        leaves are de-stemmed and washed. Then,
                                        they are placed in a conveyor hot air
                                        dryer where the moisture from the leaves
                                        is removed. Dried leaves are cooled and
                                        tested for quality parameters. They
                                        further get sterile packed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="main-timeline aos-init"
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                >
                                    <div className="down bounce">
                                        <span className="fa fa-angle-double-down"></span>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/dry-leaves.webp"
                                                    alt="Receiving Fresh Leaves"
                                                />
                                            </span>
                                            <h3 className="title">Step 1</h3>
                                            <p className="description">
                                                Receiving Fresh Leaves
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/washing-protect.webp"
                                                    alt="Washing"
                                                />
                                            </span>
                                            <h3 className="title">Step 2</h3>
                                            <p className="description">
                                                Washing
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/scissors.webp"
                                                    width="100%"
                                                    alt="Trimming / Sorting"
                                                />
                                            </span>
                                            <h3 className="title">Step 3</h3>
                                            <p className="description">
                                                Trimming / Sorting
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    width="100%"
                                                    src="/images/blanch.webp"
                                                    alt="Blanching"
                                                />
                                            </span>
                                            <h3 className="title">Step 4</h3>
                                            <p className="description">
                                                Blanching
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/drain.webp"
                                                    width="100%"
                                                    alt="Draining"
                                                />
                                            </span>
                                            <h3 className="title">Step 5</h3>
                                            <p className="description">
                                                Draining
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/dry.webp"
                                                    width="100%"
                                                    alt="Air Drying"
                                                />
                                            </span>
                                            <h3 className="title">Step 6</h3>
                                            <p className="description">
                                                Air Drying
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/snow-proof.webp"
                                                    width="100%"
                                                    alt="Cooling"
                                                />
                                            </span>
                                            <h3 className="title">Step 7</h3>
                                            <p className="description">
                                                Cooling
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/checked.webp"
                                                    width="100%"
                                                    alt="Qc Testing"
                                                />
                                            </span>
                                            <h3 className="title">Step 8</h3>
                                            <p className="description">
                                                Qc Testing
                                            </p>
                                        </Link>
                                    </div>

                                    <div
                                        className="timeline aos-init"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                    >
                                        <Link
                                            to="#"
                                            className="timeline-content"
                                        >
                                            <span className="timeline-year">
                                                <img
                                                    src="/images/delivery-truck.webp"
                                                    width="100%"
                                                    alt="Final inspection & Dispatching"
                                                />
                                            </span>
                                            <h3 className="title">Step 9</h3>
                                            <p className="description">
                                                Final inspection & Dispatching
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h3
                                    className="end aos-init"
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                >
                                    End Process
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
