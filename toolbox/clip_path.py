import sys
import math

TEMPLATE = """clip-path: polygon({});"""
SIN_45 = "var(--sin45)"


line_width = sys.argv[2] if len(sys.argv) > 2 else "10px"


class Point:
    def __init__(self, x, y, left=None, top=None, flat_x=False, flat_y=False):
        self.x = x
        self.y = y

        self.left = left if left is not None else int(x.strip("%")) < 50
        self.top = top if top is not None else int(y.strip("%")) < 50
        self.inner = False
        self.cutout_x = None
        self.cutout_y = None
        self.flat_x = flat_x
        self.flat_y = flat_y

    @staticmethod
    def from_line(line):
        x, y, d, c = line.strip().split(",")
        left = "l" in d
        top = "t" in d
        flat_x = "fx" in d
        flat_y = "fy" in d

        p = Point(x, y, left, top, flat_x, flat_y)
        if c:
            p1, p2 = p.create_cutout(c)
            return p1, p2
        return (p,)

    def copy(self):
        point = Point.__new__(Point)
        point.x = self.x
        point.y = self.y
        point.left = self.left
        point.top = self.top
        point.inner = self.inner
        point.cutout_x = self.cutout_x
        point.cutout_y = self.cutout_y
        point.flat_x = self.flat_x
        point.flat_y = self.flat_y
        return point

    def apply_line_width(self) -> "Point":
        new_point = self.copy()
        if self.left:
            new_point.x = calc(self.x, "+", line_width)
        else:
            new_point.x = calc(self.x, "-", line_width)

        if self.top:
            new_point.y = calc(self.y, "+", line_width)
        else:
            new_point.y = calc(self.y, "-", line_width)

        if new_point.cutout_x:
            if new_point.flat_y:
                new_point.y = calc(new_point.y, "+", calc(line_width, "*", SIN_45))
            else:
                new_point.cutout_x = new_point.cutout_x[0] + calc(
                    new_point.cutout_x[1:],
                    "-",
                    calc(line_width, "*", SIN_45),
                )
        if new_point.cutout_y:
            if new_point.flat_x:
                new_point.x = calc(new_point.x, "+", calc(line_width, "*", SIN_45))
            else:
                new_point.cutout_y = new_point.cutout_y[0] + calc(
                    new_point.cutout_y[1:],
                    "-",
                    calc(line_width, "*", SIN_45),
                )

        new_point.inner = True
        return new_point

    def apply_cutout(self):
        new_point = self.copy()
        if self.cutout_x:
            new_point.x = calc(self.x, self.cutout_x[0], self.cutout_x[1:])
        if self.cutout_y:
            new_point.y = calc(self.y, self.cutout_y[0], self.cutout_y[1:])

        new_point.cutout_x = None
        new_point.cutout_y = None
        return new_point

    def __str__(self):
        return f"{self.x} {self.y}"

    def create_cutout(self, cutout: str):
        """Returns 2 new points that are a chamfered at 45° and shifted by cutout. The direction depends on top and left."""
        new_point1 = self.copy()
        new_point2 = self.copy()

        if self.left and self.top:
            new_point1.cutout_x = "+" + cutout
            new_point2.cutout_y = "+" + cutout
        elif self.left and not self.top:
            new_point2.cutout_x = "+" + cutout
            new_point1.cutout_y = "-" + cutout
        elif not self.left and self.top:
            new_point2.cutout_x = "-" + cutout
            new_point1.cutout_y = "+" + cutout
        else:
            new_point1.cutout_x = "-" + cutout
            new_point2.cutout_y = "-" + cutout
        return new_point1, new_point2


def calc(v1, operator, v2):
    # if v1.startswith("calc("):
    #    v1 = v1[5:-1]
    # if v2.startswith("calc("):
    #    v2 = v2[5:-1]

    if v1 == "0%":
        return v2
    return f"calc({v1} {operator} {v2})"


with open(sys.argv[1], "r") as f:
    points = [Point.from_line(line) for line in f.readlines() if line.strip()]

# flatten points
points_2 = []
for point in points:
    points_2.extend(point)
points = points_2

points_final = []


points.append(points[0])

for point in points:
    point.apply_cutout()
    points_final.append(point.apply_cutout())
points.reverse()
for point in points:
    points_final.append(point.apply_line_width().apply_cutout())

print(TEMPLATE.format(",".join(str(point) for point in points_final)))
