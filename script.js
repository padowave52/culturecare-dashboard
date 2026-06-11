const top20Regions = [
  {region:"전남 고흥군", score:99.84, rank:1, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"전북 김제시", score:97.16, rank:2, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"인천 옹진군", score:93.78, rank:3, main_cause:"생활문화환경 부족", best_policy:"생활문화환경", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"전남 신안군", score:91.80, rank:4, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"전북 임실군", score:89.07, rank:5, main_cause:"생활문화환경 부족", best_policy:"생활문화환경", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경북 의성군", score:88.47, rank:6, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경북 봉화군", score:87.66, rank:7, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"최우선 공간정책 대상"},
  {region:"경북 영덕군", score:85.20, rank:8, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"최우선 공간정책 대상"},
  {region:"경남 산청군", score:82.43, rank:9, main_cause:"포용환경 부족", best_policy:"포용환경", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경남 거창군", score:81.77, rank:10, main_cause:"디지털 접근 부족", best_policy:"디지털 접근", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경북 경산시", score:81.06, rank:11, main_cause:"핵심문화공급 부족", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"전북 순창군", score:77.41, rank:12, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경북 청도군", score:76.74, rank:13, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경남 의령군", score:76.52, rank:14, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"대전 동구", score:76.37, rank:15, main_cause:"디지털 접근 부족", best_policy:"디지털 접근", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경북 영양군", score:76.05, rank:16, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"최우선 공간정책 대상"},
  {region:"전남 구례군", score:75.80, rank:17, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"서울 금천구", score:75.72, rank:18, main_cause:"핵심문화공급 부족", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"개별 고취약지역"},
  {region:"경북 청송군", score:74.84, rank:19, main_cause:"수요취약성", best_policy:"핵심문화공급", priority_group:"상위 20%", spatial_type:"최우선 공간정책 대상"},
  {region:"전남 함평군", score:72.64, rank:20, main_cause:"포용환경 부족", best_policy:"포용환경", priority_group:"상위 20%", spatial_type:"개별 고취약지역"}
];

const priority12Regions = [
  "경북 봉화군", "경북 영덕군", "경북 영양군", "경북 청송군",
  "전남 장흥군", "경남 함양군", "전북 부안군", "경북 안동시",
  "경북 영천시", "전남 강진군", "전남 완도군", "경북 울진군"
];

const regionList = document.getElementById("regionList");
const regionSearch = document.getElementById("regionSearch");
const diagnosisCard = document.getElementById("diagnosisCard");
const priority12List = document.getElementById("priority12List");

function renderRegionList(items) {
  regionList.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.className = "region-item";
    button.innerHTML = `<strong>${item.rank}. ${item.region}</strong><span>취약도 ${item.score.toFixed(2)}점 · ${item.main_cause}</span>`;
    button.addEventListener("click", () => renderDiagnosis(item, button));
    regionList.appendChild(button);
  });
}

function renderDiagnosis(item, activeButton) {
  document.querySelectorAll(".region-item").forEach(el => el.classList.remove("active"));
  if (activeButton) activeButton.classList.add("active");

  const isSpatialPriority = item.spatial_type.includes("최우선");
  const policyText = isSpatialPriority
    ? "인접 지자체 공동 순회 문화프로그램, 광역 문화이동 지원, 공동 디지털 문화거점 등 권역 공동정책을 우선 검토합니다."
    : `${item.best_policy} 영역을 중심으로 지역 맞춤형 직접개입을 우선 검토합니다.`;

  diagnosisCard.innerHTML = `
    <span class="card-label">${item.spatial_type}</span>
    <h3>${item.region}</h3>
    <div class="score">${item.score.toFixed(2)}점</div>
    <p>CultureCare 문화접근 취약도 전국 ${item.rank}위 지역입니다.</p>
    <div class="detail-grid">
      <div><span>전국 순위</span><strong>${item.rank}위</strong></div>
      <div><span>정책 우선그룹</span><strong>${item.priority_group}</strong></div>
      <div><span>주요 취약원인</span><strong>${item.main_cause}</strong></div>
      <div><span>최적 단일정책</span><strong>${item.best_policy}</strong></div>
    </div>
    <div class="policy-recommendation">
      <strong>권장 정책방향</strong><br />
      ${policyText}
    </div>
  `;
}

function renderPriority12() {
  priority12List.innerHTML = "";
  priority12Regions.forEach((region) => {
    const li = document.createElement("li");
    li.textContent = region;
    priority12List.appendChild(li);
  });
}

regionSearch.addEventListener("input", (event) => {
  const q = event.target.value.trim();
  const filtered = top20Regions.filter(item => item.region.includes(q) || item.main_cause.includes(q) || item.best_policy.includes(q));
  renderRegionList(filtered);
});

renderRegionList(top20Regions);
renderPriority12();
renderDiagnosis(top20Regions[6]);
