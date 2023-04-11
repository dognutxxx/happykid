<React.Fragment>
  <div className="flex justify-center">
    <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick={handleAddtoCard}>
      Add to Card
    </Button>
  </div>
  <Modal show={showModal} onClose={onClose} size="4xl">
    <Modal.Body>
      <div className="space-y-6 grid grid-cols-8 text-mono">
        {selectedColor === "red" ? (
          <img src={imgGoods1} alt="imgGoods1" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
        ) : (
          <img src={imgGoods2} alt="imgGoods2" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
        )}

        <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <h2 className="text-2xl">I'm Product</h2>
          <p className="my-4">
            <div className="">
              {item.formattedDiscountedPrice}
            </div>
          </p>
          <div className="flex items-center">
            <label className="">
              <input className="mr-2" type="radio" name="color" value="red" checked={selectedColor === "red"} onChange={handleColorChange} />
              Red
            </label>
            <label className="mx-4">
              <input className="mr-2" type="radio" name="color" value="green" checked={selectedColor === "green"} onChange={handleColorChange} />
              Green
            </label>
          </div>
          <div id="select" className="my-4">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Size" />
            </div>
            <Select id="countries" required={true} placeholder="Select">
              <option disabled>Select</option>
              <option>12-18 months</option>
              <option>18-24 months</option>
              <option>2 years</option>
              <option>3 years</option>
            </Select>
          </div>
          <div>
            <SelectNumber />
          </div>
          <Button size="lg" outline={true} gradientDuoTone="purpleToPink">
            Add to Card
          </Button>
          <div className="mt-6 text-sm">
            <a href="" className="underline">
              View More Details
            </a>
          </div>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button color="gray" onClick={onClose}>
        Back
      </Button>
    </Modal.Footer>
  </Modal>
</React.Fragment>;
