import Briefcases from "@/assets/Briefcases.jpg"
import Briefcase01 from "@/assets/Briefcase01.jpg"
import OverlayImage from "@/components/overlay-image"
const MenCategories = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OverlayImage src={Briefcases} title="BRIEFCASES & DAY BAGS" alt="Briefcases" slug="briefcases" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center text-center sm:col-span-2">
                        <img
                            src={Briefcase01}
                            alt="Leather Backpack"
                            className="w-full rounded-xl"
                        />
                        <h3 className="product-title">
                            Leather Backpack
                        </h3>
                        <p className="product-price">From Rs. 117,600.00</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={Briefcase01}
                            alt="Leather Zip-Top Briefcase"
                            className="w-full rounded-xl"
                        />
                        <h3 className="product-title">
                            Leather Zip-Top Briefcase
                        </h3>
                        <p className="product-price">From Rs. 67,000.00</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src={Briefcase01}
                            alt="The 929 Briefcase"
                            className="w-full rounded-xl"
                        />
                        <h3 className="product-title">
                            The 929 Briefcase
                        </h3>
                        <p className="product-price">From Rs. 72,400.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenCategories
