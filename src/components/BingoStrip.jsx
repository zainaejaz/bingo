const stripData = [
  [
    1, 0, 0, 0, 41, 0, 63, 70, 81, 0, 15, 29, 31, 47, 51, 0, 0, 0, 3, 19, 0, 34,
    0, 52, 0, 76, 0,
  ],
  [
    4, 0, 24, 0, 40, 0, 62, 0, 82, 0, 13, 27, 30, 0, 0, 67, 74, 0, 0, 17, 0, 35,
    0, 57, 0, 78, 85,
  ],
  [
    7, 0, 20, 0, 0, 55, 0, 73, 89, 0, 12, 26, 36, 44, 0, 61, 0, 0, 0, 18, 0, 37,
    46, 0, 68, 0, 90,
  ],
  [
    0, 0, 25, 39, 0, 50, 60, 77, 0, 6, 10, 28, 0, 42, 0, 0, 0, 86, 8, 0, 0, 0,
    48, 56, 66, 0, 87,
  ],
  [
    9, 11, 21, 0, 0, 0, 69, 0, 80, 0, 14, 0, 0, 43, 53, 0, 71, 84, 0, 0, 22, 38,
    45, 58, 0, 75, 0,
  ],
  [
    0, 0, 0, 32, 0, 54, 64, 72, 83, 2, 16, 0, 0, 49, 59, 0, 0, 88, 5, 0, 23, 33,
    0, 0, 65, 79, 0,
  ],
];

const BingoStrip = () => {
  return (
    <div className="flex flex-col items-center w-full p-4 bg-[#dc8cb0]">
      {stripData.map((card, index) => (
        <div key={index} className="flex items-center justify-center">
          {/* BINGO Text - Rotated Vertically */}
          <div className="flex items-center justify-center w-[55px] sm:w-[66px] md:w-[68px] lg:w-[72px] h-full text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-medium text-[black] transform -rotate-90 leading-none -mr-3">
            BINGO
          </div>

          {/* Bingo Table */}
          <table className="bg-[#fae8e0] border-4 border-[black] shadow-md mb-4 w-full max-w-lg">
            <tbody>
              {[0, 1, 2].map((row) => (
                <tr key={row}>
                  {card.slice(row * 9, row * 9 + 9).map((num, i) => (
                    <td
                      key={i}
                      className={`w-12 h-12 border-4 border-[black] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold text-center`}
                    >
                      {num !== 0 ? num : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default BingoStrip;
