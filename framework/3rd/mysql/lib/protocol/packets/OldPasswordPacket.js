<<<<<<< HEAD
module.exports = OldPasswordPacket;
function OldPasswordPacket(options) {
  options = options || {};

  this.scrambleBuff = options.scrambleBuff;
}

OldPasswordPacket.prototype.parse = function(parser) {
  this.scrambleBuff = parser.parseNullTerminatedBuffer();
};

OldPasswordPacket.prototype.write = function(writer) {
  writer.writeBuffer(this.scrambleBuff);
  writer.writeFiller(1);
};
=======
module.exports = OldPasswordPacket;
function OldPasswordPacket(options) {
  options = options || {};

  this.scrambleBuff = options.scrambleBuff;
}

OldPasswordPacket.prototype.parse = function(parser) {
  this.scrambleBuff = parser.parseNullTerminatedBuffer();
};

OldPasswordPacket.prototype.write = function(writer) {
  writer.writeBuffer(this.scrambleBuff);
  writer.writeFiller(1);
};
>>>>>>> 7af941ee074ba19b0302249f5332e62ee930056a
