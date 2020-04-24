<div class = "collapse1">
							{
								isFaceRecognitrionCollapsed && 
										(
											<div class="facerecognition">
												<input type="checkbox" id="title1" onClick={ this.collaspeFaceRecognition } />
						      					<label for="title1">
						      						<p id="header">Face Recognition</p>
						      						<p id="sign">+</p>
						      					</label>

												<div class="smartContent">
													<h1>Face Recognition</h1>
													<div class="content-description">
														<input type="text" name="" />
														<button onClick="#">Detect</button>
													</div>
												</div>
											</div>
										)
							}
					</div>

					// <div class="tab">
			// 	<div class="navtab">
			// 		<div class="btn-box">
			// 			<button id="braintab" onClick={ this.openSmartBrain } ref = "btn1" >
			// 				<i class="fa fa-rocket" aria-hidden="true"></i>
			// 				Smart brain
			// 			</button>
			// 			<button id="gallerytab" onClick={ this.openGallery } ref = "btn2" >
			// 				<i class="fa fa-picture-o" aria-hidden="true"></i>
			// 				Gallary
			// 			</button>
			// 		</div>
			// 	</div>
			// 	<Collapse class="collapse"/>
			// </div>


//Tab.css
/*.collapse {
  margin-top: -749px;
  width:80%;
  height: 700px;
}
*/

.navtab {
  width:80%;
  /*height: 700px;*/
  position: relative;
  margin: 100px auto;
  overflow: hidden;
  margin-top: 20%;
  border-top-left-radius: inherit;
  /*box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */
}

.btn-box{
  display: flex;
  border-bottom: 1px solid #ccc;
}

.btn-box button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  margin-right: 50px;
  font-size: 20px;
  font-weight: bold;
  color: teal;
  margin: 0px;
}

.btn-box .fa{
  margin-right: 20px;
}

.btn-box button:hover .fa{
  color: #ff7846;
}

.tab {
  border-radius: 5px;
}